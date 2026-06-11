<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as THREE from 'three'

const containerRef = ref(null)

let renderer
let scene
let camera
let material
let mesh
let clock
let resizeObserver

onMounted(() => {
  const container = containerRef.value
  if (!container) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'low-power',
  })

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  container.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  clock = new THREE.Clock()

  const vertexShader = `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `

  const fragmentShader = `
    precision highp float;

    uniform vec2 iResolution;
    uniform float iTime;

    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);

      return mix(
        mix(random(i), random(i + vec2(1.0, 0.0)), u.x),
        mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;

      for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p *= 2.0;
        a *= 0.5;
      }

      return v;
    }

    void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;

      float t = iTime * 0.055 + 12.0;

      vec2 p = uv;
      p.y += 0.18;

      float f1 = fbm(vec2(p.x * 1.15 - 0.55, p.y + t));
      float f2 = fbm(vec2(p.x * 0.85 + 0.35, p.y * 1.15 - t * 0.42));

      float curtainA = smoothstep(0.16, 0.62, f1) * (1.15 - p.y);
      float curtainB = smoothstep(0.22, 0.70, f2) * 0.55;

      float curtain = clamp(curtainA + curtainB, 0.0, 1.0);

      vec3 petrol = vec3(0.03, 0.22, 0.30);
      vec3 cyan = vec3(0.06, 0.68, 0.88);
      vec3 blue = vec3(0.18, 0.56, 0.82);
      vec3 gold = vec3(0.92, 0.70, 0.38);

      vec3 color = mix(petrol, cyan, curtain);
      color = mix(color, blue, 0.12);
      color += gold * curtain * 0.10;

      float vignette = smoothstep(1.45, 0.12, length(uv));
      color *= curtain * vignette * 1.05;

      gl_FragColor = vec4(color, curtain * 0.55);
    }
  `

  const uniforms = {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector2() },
  }

  material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    transparent: true,
    depthWrite: false,
    depthTest: false,
  })

  mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
  scene.add(mesh)

  const resize = () => {
    const width = container.clientWidth
    const height = container.clientHeight

    renderer.setSize(width, height, false)
    uniforms.iResolution.value.set(width, height)
  }

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container)
  resize()

  renderer.setAnimationLoop(() => {
    uniforms.iTime.value = clock.getElapsedTime()
    renderer.render(scene, camera)
  })
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  renderer?.setAnimationLoop(null)

  if (renderer?.domElement?.parentNode) {
    renderer.domElement.parentNode.removeChild(renderer.domElement)
  }

  material?.dispose()
  mesh?.geometry?.dispose()
  renderer?.dispose()
})
</script>

<template>
  <div
    ref="containerRef"
    class="pointer-events-none absolute inset-0 z-0 hidden opacity-34 blur-[0.35px] md:block dark:opacity-82"
    aria-hidden="true"
  />
</template>
