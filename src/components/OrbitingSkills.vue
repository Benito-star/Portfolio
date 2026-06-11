<script setup>
const innerSkills = [
  { label: 'HTML5', icon: 'html', angle: 0 },
  { label: 'CSS3', icon: 'css', angle: 51 },
  { label: 'JavaScript', icon: 'javascript', angle: 102 },
  { label: 'Vue.js', icon: 'vue', angle: 153 },
  { label: 'Tailwind CSS', icon: 'tailwind', angle: 204 },
  { label: 'Bootstrap', icon: 'bootstrap', angle: 255 },
  { label: 'GitHub', icon: 'github', angle: 306 },
]

const outerSkills = [
  { label: 'Figma', icon: 'figma', angle: 0 },
  { label: 'Photoshop', icon: 'photoshop', angle: 36 },
  { label: 'Illustrator', icon: 'illustrator', angle: 72 },
  { label: 'Canva', icon: 'canva', angle: 108 },
  { label: 'Affinity', icon: 'affinity', angle: 144 },
  { label: 'WordPress', icon: 'wordpress', angle: 180 },
  { label: 'Elementor', icon: 'elementor', angle: 216 },
  { label: 'WooCommerce', icon: 'woocommerce', angle: 252 },
  { label: 'SEO', icon: 'seo', angle: 288 },
  { label: 'Accessibilité', icon: 'accessibility', angle: 324 },
]
</script>

<template>
  <section
    class="relative mx-auto flex h-[440px] w-full max-w-[540px] items-center justify-center overflow-hidden rounded-3xl border border-[#D4AF73]/15 bg-[#0B1020] shadow-[0_0_80px_rgba(43,168,200,0.08)]"
    aria-labelledby="orbiting-skills-title"
  >
    <h2 id="orbiting-skills-title" class="sr-only">Stack design, intégration et CMS</h2>

    <div class="absolute h-64 w-64 rounded-full bg-[#2BA8C8]/10 blur-3xl" aria-hidden="true"></div>
    <div class="absolute h-96 w-96 rounded-full bg-[#D4AF73]/10 blur-3xl" aria-hidden="true"></div>

    <div
      class="absolute h-52 w-52 rounded-full border border-[#2BA8C8]/35 shadow-[0_0_70px_rgba(43,168,200,0.28),inset_0_0_35px_rgba(43,168,200,0.12)]"
    ></div>

    <div
      class="absolute h-[336px] w-[336px] rounded-full border border-[#D4AF73]/35 shadow-[0_0_90px_rgba(212,175,115,0.24),inset_0_0_45px_rgba(212,175,115,0.10)]"
    ></div>

    <div
      class="z-20 flex h-24 w-24 items-center justify-center rounded-full border border-[#D4AF73]/45 bg-[#101827] text-center text-sm font-semibold leading-snug text-white shadow-[0_0_55px_rgba(43,168,200,0.32)]"
    >
      UI/UX<br />
      + CMS
    </div>

    <!-- Orbite intérieure -->
    <div
      class="pointer-events-none absolute inset-0 z-30 animate-[spin_30s_linear_infinite] motion-reduce:animate-none"
    >
      <div
        v-for="skill in innerSkills"
        :key="skill.label"
        class="absolute left-1/2 top-1/2"
        :style="{
          transform: `rotate(${skill.angle}deg) translateX(110px) rotate(-${skill.angle}deg)`,
        }"
      >
        <div
          class="group pointer-events-auto relative flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite_reverse] items-center justify-center rounded-full border border-white/10 bg-[#111827]/95 p-2 shadow-[0_0_26px_rgba(43,168,200,0.24)] backdrop-blur-sm transition-all duration-300 hover:z-[80] hover:scale-110 hover:border-[#D4AF73]/50 hover:shadow-[0_0_36px_rgba(212,175,115,0.42)] motion-reduce:animate-none"
          :aria-label="skill.label"
        >
          <svg v-if="skill.icon === 'html'" viewBox="0 0 24 24" class="h-7 w-7">
            <path fill="#E34F26" d="M1.5 0h21l-1.91 21.56L11.98 24l-8.56-2.44L1.5 0z" />
            <path
              fill="#fff"
              d="M7.03 6.75h9.94l-.17 2.1H9.31l.18 2.1h7.12l-.55 6.18L12 18.27l-4.05-1.14-.28-3.13h2l.14 1.55 2.19.59 2.2-.59.25-2.55H7.6L7.03 6.75z"
            />
          </svg>

          <svg v-else-if="skill.icon === 'css'" viewBox="0 0 24 24" class="h-7 w-7">
            <path fill="#1572B6" d="M1.5 0h21l-1.91 21.56L11.98 24l-8.56-2.44L1.5 0z" />
            <path
              fill="#fff"
              d="M16.86 6.75H7.08l.18 2.1h7.34l-.18 2.1H7.44l.18 2.1h6.62l-.24 2.5-2 .54-2-.54-.13-1.48H7.83l.27 3.06L12 18.27l3.9-1.14.53-6.18.18-2.1.25-2.1z"
            />
          </svg>

          <svg v-else-if="skill.icon === 'javascript'" viewBox="0 0 24 24" class="h-7 w-7">
            <rect width="24" height="24" rx="3" fill="#F7DF1E" />
            <path
              fill="#111827"
              d="M6.2 18.7l1.8-1.1c.35.62.67 1.15 1.43 1.15.73 0 1.19-.29 1.19-1.4V9.8h2.25v7.58c0 2.34-1.37 3.4-3.36 3.4-1.8 0-2.84-.93-3.31-2.08zm7.88-.24l1.8-1.04c.47.76 1.08 1.32 2.15 1.32.9 0 1.48-.45 1.48-1.08 0-.75-.59-1.01-1.59-1.45l-.54-.23c-1.57-.67-2.61-1.51-2.61-3.28 0-1.63 1.24-2.87 3.18-2.87 1.38 0 2.37.48 3.08 1.74l-1.72 1.1c-.37-.67-.77-.94-1.39-.94-.63 0-1.03.4-1.03.94 0 .66.4.92 1.34 1.32l.54.23c1.85.79 2.89 1.6 2.89 3.42 0 1.96-1.54 3.03-3.61 3.03-2.02 0-3.32-.96-3.96-2.22z"
            />
          </svg>

          <svg v-else-if="skill.icon === 'vue'" viewBox="0 0 256 221" class="h-7 w-7">
            <path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0z" />
            <path fill="#35495E" d="M157.44 0L128 51.2 97.92 0H49.92L128 134.4 205.44 0z" />
          </svg>

          <svg v-else-if="skill.icon === 'tailwind'" viewBox="0 0 24 24" class="h-7 w-7">
            <path
              fill="#06B6D4"
              d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.56.89 2.29 1.62C13.67 10.62 15.03 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.56-.89-2.29-1.62C16.33 6.18 14.97 4.8 12 4.8zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.56.89 2.29 1.62C7.67 17.82 9.03 19.2 12 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.56-.89-2.29-1.62C10.33 13.38 8.97 12 6 12z"
            />
          </svg>

          <svg v-else-if="skill.icon === 'bootstrap'" viewBox="0 0 24 24" class="h-7 w-7">
            <rect width="24" height="24" rx="5" fill="#7952B3" />
            <path
              fill="#fff"
              d="M7.3 5.8h5.7c2.4 0 3.8 1.1 3.8 2.9 0 1.2-.6 2.1-1.7 2.5 1.4.4 2.2 1.4 2.2 2.9 0 2.1-1.6 3.4-4.2 3.4H7.3zm2.4 4.9h2.8c1.2 0 1.9-.5 1.9-1.5s-.7-1.4-1.9-1.4H9.7zm0 4.8h3.1c1.3 0 2.1-.6 2.1-1.7s-.8-1.7-2.1-1.7H9.7z"
            />
          </svg>

          <svg v-else-if="skill.icon === 'github'" viewBox="0 0 24 24" class="h-12 w-12">
            <path
              fill="#ffffff"
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.46.11-3.03 0 0 .97-.31 3.17 1.17.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.48 3.17-1.17 3.17-1.17.63 1.57.23 2.74.11 3.03.74.8 1.19 1.82 1.19 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
            />
          </svg>

          <span
            class="pointer-events-none absolute -bottom-8 left-1/2 z-[90] -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0B1020]/95 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-200 group-hover:opacity-100"
          >
            {{ skill.label }}
          </span>
        </div>
      </div>
    </div>

    <!-- Orbite extérieure -->
    <div
      class="pointer-events-none absolute inset-0 z-40 animate-[spin_52s_linear_infinite_reverse] motion-reduce:animate-none"
    >
      <div
        v-for="skill in outerSkills"
        :key="skill.label"
        class="absolute left-1/2 top-1/2"
        :style="{
          transform: `rotate(${skill.angle}deg) translateX(180px) rotate(-${skill.angle}deg)`,
        }"
      >
        <div
          class="group pointer-events-auto relative flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 animate-[spin_52s_linear_infinite] items-center justify-center rounded-full border border-white/10 bg-[#111827]/95 p-2 shadow-[0_0_26px_rgba(212,175,115,0.24)] backdrop-blur-sm transition-all duration-300 hover:z-[80] hover:scale-110 hover:border-[#D4AF73]/50 hover:shadow-[0_0_36px_rgba(212,175,115,0.42)] motion-reduce:animate-none"
          :aria-label="skill.label"
        >
          <svg v-if="skill.icon === 'figma'" viewBox="0 0 24 24" class="h-7 w-7">
            <path fill="#F24E1E" d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8z" />
            <path fill="#A259FF" d="M4 12a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" />
            <path fill="#1ABCFE" d="M4 4a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" />
            <path fill="#0ACF83" d="M12 0h4a4 4 0 0 1 0 8h-4z" />
            <path fill="#FF7262" d="M20 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
          </svg>

          <svg v-else-if="skill.icon === 'photoshop'" viewBox="0 0 24 24" class="h-7 w-7">
            <rect width="24" height="24" rx="4" fill="#001E36" />
            <path
              fill="#31A8FF"
              d="M5.2 6.2h4.1c2.5 0 4.1 1.4 4.1 3.7 0 2.5-1.7 3.9-4.3 3.9H7.6v4H5.2zm2.4 5.4h1.3c1.3 0 2-.6 2-1.6 0-1-.7-1.6-1.9-1.6H7.6zm7.1 4.3c.6.4 1.4.7 2.2.7.8 0 1.1-.3 1.1-.7s-.3-.6-1.4-.9c-1.6-.5-2.4-1.3-2.4-2.5 0-1.6 1.3-2.7 3.3-2.7 1 0 1.8.2 2.4.5l-.5 1.7c-.4-.2-1.1-.5-1.8-.5s-1 .3-1 .6c0 .4.3.6 1.5.9 1.5.5 2.2 1.2 2.2 2.5 0 1.5-1.2 2.7-3.5 2.7-1.1 0-2.1-.3-2.7-.7z"
            />
          </svg>

          <svg v-else-if="skill.icon === 'illustrator'" viewBox="0 0 24 24" class="h-7 w-7">
            <rect width="24" height="24" rx="4" fill="#330000" />
            <path
              fill="#FF9A00"
              d="M9.2 6.2h2.5l4.1 11.6h-2.4l-.9-2.8H8.3l-.8 2.8H5.1zm2.8 6.9l-.8-2.5c-.2-.7-.5-1.6-.7-2.3h-.1c-.2.7-.4 1.6-.7 2.3l-.8 2.5zm5-5.7c0-.7.5-1.1 1.2-1.1s1.2.5 1.2 1.1-.5 1.1-1.2 1.1-1.2-.4-1.2-1.1zm.1 2.2h2.3v8.2h-2.3z"
            />
          </svg>

          <svg v-else-if="skill.icon === 'canva'" viewBox="0 0 24 24" class="h-8 w-8">
            <defs>
              <linearGradient id="canvaLogoGradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stop-color="#00C4CC" />
                <stop offset="55%" stop-color="#7D2AE8" />
                <stop offset="100%" stop-color="#A548FF" />
              </linearGradient>
            </defs>
            <rect width="24" height="24" rx="6" fill="url(#canvaLogoGradient)" />
            <text
              x="12"
              y="14.4"
              text-anchor="middle"
              font-size="6.2"
              font-weight="700"
              fill="#ffffff"
              font-family="Georgia, serif"
              font-style="italic"
            >
              Canva
            </text>
          </svg>

          <svg v-else-if="skill.icon === 'affinity'" viewBox="0 0 24 24" class="h-8 w-8">
            <rect width="24" height="24" rx="5" fill="#9BF06E" />
            <path
              fill="#050505"
              d="M5.2 15.7c0-2.4 2.3-4.2 5.7-5.1 2.9-.8 5.1-1.3 5.1-2.5 0-.6-.6-1-1.8-1-2.1 0-4.4.9-6.3 2.1V5.5c1.8-.9 4.1-1.5 6.3-1.5 3.5 0 5.8 1.5 5.8 3.8 0 2.7-2.6 4-5.8 4.9-2.5.7-4.5 1.2-4.5 2.5 0 .7.7 1.1 1.8 1.1 1.8 0 3.8-.8 5.5-2.1v3.7c-1.5.9-3.5 1.5-5.6 1.5-3.8 0-6.2-1.5-6.2-3.7z"
            />
            <path fill="#050505" d="M16.4 12.4h3.7v7.3h-3.7z" />
          </svg>

          <svg v-else-if="skill.icon === 'wordpress'" viewBox="0 0 24 24" class="h-7 w-7">
            <circle cx="12" cy="12" r="11" fill="#21759B" />
            <circle cx="12" cy="12" r="8.7" fill="none" stroke="#ffffff" stroke-width="1.25" />
            <path
              fill="#ffffff"
              d="M4.85 7.25C5.35 7.3 5.9 7.32 6.45 7.32C7.05 7.32 7.75 7.28 8.15 7.25C8.45 7.23 8.55 7.65 8.25 7.75L7.55 7.9L10.35 16.65L12.05 11.35L10.9 7.9L10.25 7.75C9.95 7.65 10.05 7.23 10.35 7.25C10.9 7.28 11.55 7.32 12.15 7.32C12.75 7.32 13.45 7.28 13.9 7.25C14.2 7.23 14.3 7.65 14 7.75L13.3 7.9L16.05 16.45L16.85 13.85C17.25 12.55 17.55 11.55 17.55 10.45C17.55 9.45 17.15 8.75 16.75 8.15C16.35 7.5 16.05 6.95 16.05 6.35C16.05 5.9 16.22 5.52 16.55 5.25C14.95 4.15 13.05 3.6 11.9 3.6C8.95 3.6 6.35 5.05 4.85 7.25ZM3.65 12C3.65 15.25 5.52 18.05 8.25 19.42L4.35 8.75C3.9 9.75 3.65 10.82 3.65 12ZM12.25 20.25C13.35 20.2 14.42 19.92 15.4 19.45L12.75 12.1L10.25 19.35C10.9 19.92 11.52 20.18 12.25 20.25ZM19.1 8.15C19.25 8.95 19.15 10.08 18.75 11.38L16.35 18.65C18.75 17.15 20.35 14.6 20.35 12C20.35 10.62 19.95 9.32 19.1 8.15Z"
            />
          </svg>

          <svg v-else-if="skill.icon === 'elementor'" viewBox="0 0 24 24" class="h-7 w-7">
            <circle cx="12" cy="12" r="11" fill="#92003B" />
            <path
              fill="#fff"
              d="M7 7h2.5v10H7zM11.5 7H17v2.4h-5.5zM11.5 10.8H17v2.4h-5.5zM11.5 14.6H17V17h-5.5z"
            />
          </svg>

          <svg v-else-if="skill.icon === 'woocommerce'" viewBox="0 0 24 24" class="h-7 w-7">
            <path
              fill="#96588A"
              d="M3.5 5.5h17A2.5 2.5 0 0 1 23 8v6.3a2.5 2.5 0 0 1-2.5 2.5h-5.1l-3.4 2.7.6-2.7H3.5A2.5 2.5 0 0 1 1 14.3V8a2.5 2.5 0 0 1 2.5-2.5z"
            />
            <text
              x="12"
              y="13.1"
              text-anchor="middle"
              font-size="6.8"
              font-weight="900"
              fill="#ffffff"
              font-family="Arial, sans-serif"
            >
              WOO
            </text>
          </svg>

          <svg v-else-if="skill.icon === 'seo'" viewBox="0 0 24 24" class="h-7 w-7">
            <circle cx="10.5" cy="10.5" r="6" fill="none" stroke="#D4AF73" stroke-width="2" />
            <path d="M15 15l5 5" stroke="#D4AF73" stroke-width="2.2" stroke-linecap="round" />
            <path
              d="M7.5 10h6M7.5 12.5h4"
              stroke="#fff"
              stroke-width="1.6"
              stroke-linecap="round"
            />
          </svg>

          <svg v-else-if="skill.icon === 'accessibility'" viewBox="0 0 24 24" class="h-7 w-7">
            <circle cx="12" cy="12" r="11" fill="#1D9BD7" />
            <circle cx="12" cy="12" r="8.65" fill="none" stroke="#ffffff" stroke-width="1.35" />
            <circle cx="12" cy="6.9" r="1.55" fill="#ffffff" />
            <path
              d="M6.9 10.1c1.9.55 3.55.82 5.1.82s3.2-.27 5.1-.82"
              fill="none"
              stroke="#ffffff"
              stroke-width="1.85"
              stroke-linecap="round"
            />
            <path
              d="M12 10.85v3.35"
              fill="none"
              stroke="#ffffff"
              stroke-width="1.85"
              stroke-linecap="round"
            />
            <path
              d="M12 14.2l-2.55 3.65M12 14.2l2.55 3.65"
              fill="none"
              stroke="#ffffff"
              stroke-width="1.85"
              stroke-linecap="round"
            />
          </svg>

          <span
            class="pointer-events-none absolute -bottom-8 left-1/2 z-[90] -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0B1020]/95 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-200 group-hover:opacity-100"
          >
            {{ skill.label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
