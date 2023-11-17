/* eslint-disable functional/no-return-void */
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statements */

export const load = async (src: string): Promise<true> => {
	const id = `__load_${window.btoa(src)}__`

	const exists = Boolean(document.getElementById(id))

	console.log({ id, exists })

	return exists
		? true
		: new Promise((resolve) => {
				const script = document.createElement('script')

				script.id = id
				script.src = src
				document.body.append(script)
				script.onload = () => resolve(true)
		  })
}
