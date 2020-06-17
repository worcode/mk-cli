import { GluegunToolbox } from 'gluegun'
import { IInstallInputValues } from '../types'

module.exports = async (toolbox: GluegunToolbox) => {
	toolbox.generatePackageJson = async (
		rootDir: string,
		inputs: IInstallInputValues
	) => {
		const { template } = toolbox

		await template.generate({
			template: 'package-json.ts.ejs',
			target: `${rootDir}/package.json`,
			props: inputs
		})
	}
}