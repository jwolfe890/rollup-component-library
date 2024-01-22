import typescript from "@rollup/plugin-typescript";
import terser from '@rollup/plugin-terser';
// rollup.config.mjs
export default {
	input: "src/index.tsx",
	output: [{
		format: 'cjs',
        dir: 'dist'
	}
],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })]
};