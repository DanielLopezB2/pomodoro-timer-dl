<template>
  <div class="flex flex-col min-h-screen">
    <MenuHeaderComponent />
    <main class="flex-1 flex items-center justify-center">
      <div class="p-6">
        <slot />
      </div>
    </main>
    <MenuFooterComponent />
  </div>
</template>
