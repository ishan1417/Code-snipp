module.exports = {
  presets: [
    // Ensure Jest (Node) gets CommonJS modules so `import` is transpiled
    ['@babel/preset-env', { targets: { node: 'current' }, modules: 'commonjs' }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
};
