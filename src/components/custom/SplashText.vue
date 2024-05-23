<script setup lang="ts"></script>

<template>
  <div class="splash-text">
    <div class="scroll-container">
      <div class="scroll-text">
        <span>
          <slot></slot>
        </span>
      </div>
    </div>
  </div>
</template>

<style>
  .splash-text {
    position: absolute;
    top: 0;
    z-index: 0;
  }
  .scroll-container {
    position: relative;
    overflow: hidden;
  }

  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(-100%);
    }
  }

  .scroll-text {
    position: absolute;
    animation: scroll 20s linear infinite;
  }

  .splash-text span {
    font-family: var(--font-display);
    font-size: var(--size-64);
    writing-mode: vertical-lr;
    opacity: 25%;
  }
</style>
