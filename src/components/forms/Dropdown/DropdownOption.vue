<script setup lang="ts"></script>

<template>
  <li class="dropdown-option">
    <slot></slot>
  </li>
</template>

<style>
  .dropdown-option {
    display: flex;
    color: var(--text);
    white-space: nowrap;
    background-color: transparent;
  }
  .left .dropdown-option {
    text-align: left;
    justify-content: flex-start;
  }
  .right .dropdown-option {
    text-align: right;
    justify-content: flex-end;
  }

  .dropdown-option:hover {
    background-color: var(--background-accent);
  }
  .dropdown-option:active {
    background-color: var(--background-accent-2);
    box-shadow:
      0 0 0 2px var(--background),
      0 0 0 3px var(--focus);
  }

  .dropdown-option > * {
    padding: var(--space-sm) var(--space-md);
    color: inherit;
  }
</style>
