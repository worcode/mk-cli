import { GluegunCommand } from 'gluegun'
import { IInstallingInputs } from '../types'

const command: GluegunCommand = {
	name: 'install',
	run: async toolbox => {
		const { print, filesystem, system } = toolbox
		const {
			getInstallingInputs,
			generatePackageJson,
			generateReadme,
			generateStaticFiles
		} = toolbox

		const inputs: IInstallingInputs = await getInstallingInputs()

		const rootDir = `${filesystem.path()}/${inputs.app_name}`

		await generatePackageJson(rootDir, inputs)
		await generateReadme(rootDir, inputs)
		await generateStaticFiles(rootDir)

		print.info('installing...')
		print.info(await system.run('yarn install --cwd ' + inputs.app_name))
	}
}

module.exports = command
