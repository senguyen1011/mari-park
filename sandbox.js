const styles = `--space-xs: var(--size-1);
--space-sm: var(--size-2);
--space-md: var(--size-4);
--space-lg: var(--size-6);
--space-xl: var(--size-8);
--space-2xl: var(--size-10);
--space-3xl: var(--size-12);
--space-4xl: var(--size-16);`
  .split('\n')
  .map((ele) => ele.split(' ')[0].replace('--', '').replace(':', '').trim());

// styles.forEach((ele) => {
//   console.log(
//     `.gap-${ele.replace('space-', '')} {
//   gap: var(--${ele});
// }`
//   );
// });

const colors = `--mauve-1: #121113;
--mauve-2: #1a191b;
--mauve-3: #232225;
--mauve-4: #2b292d;
--mauve-5: #323035;
--mauve-6: #3c393f;
--mauve-7: #49474e;
--mauve-8: #625f69;
--mauve-9: #6f6d78;
--mauve-10: #7c7a85;
--mauve-11: #b5b2bc;
--mauve-12: #eeeef0;
--mauve-a1: #00000000;
--mauve-a2: #f5f4f609;
--mauve-a3: #ebeaf814;
--mauve-a4: #eee5f81d;
--mauve-a5: #efe6fe25;
--mauve-a6: #f1e6fd30;
--mauve-a7: #eee9ff40;
--mauve-a8: #eee7ff5d;
--mauve-a9: #eae6fd6e;
--mauve-a10: #ece9fd7c;
--mauve-a11: #f5f1ffb7;
--mauve-a12: #fdfdffef;
--purple-1: #18111b;
--purple-2: #1e1523;
--purple-3: #301c3b;
--purple-4: #3d224e;
--purple-5: #48295c;
--purple-6: #54346b;
--purple-7: #664282;
--purple-8: #8457aa;
--purple-9: #8e4ec6;
--purple-10: #9a5cd0;
--purple-11: #d19dff;
--purple-12: #ecd9fa;
--purple-a1: #b412f90b;
--purple-a2: #b744f714;
--purple-a3: #c150ff2d;
--purple-a4: #bb53fd42;
--purple-a5: #be5cfd51;
--purple-a6: #c16dfd61;
--purple-a7: #c378fd7a;
--purple-a8: #c47effa4;
--purple-a9: #b661ffc2;
--purple-a10: #bc6fffcd;
--purple-a11: #d19dff;
--purple-a12: #f1ddfffa;
--background: var(--mauve-1);
--foreground: var(--mauve-a2);
--text: var(--mauve-12);
--text-muted: var(--mauve-11);`
  .split('\n')
  .map((ele) => ele.split(' ')[0].replace('--', '').replace(':', '').trim());

// colors.forEach((ele) => {
//   console.log(`| '${ele}'`);
// });
colors.forEach((ele) => {
  console.log(
    `.text-${ele} {
  color: var(--${ele});
}`
  );
});
