export const Error = {
	exec: (message: string, code: number) => {
		throw { message: { message }, code };
	}
}
