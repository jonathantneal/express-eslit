import eslit from 'eslit';

export default (path, options, render = (err, content) => err || content) => eslit(path, options.locals, options.options).then(
	(contents) => render(null, contents),
	(error) => render(error, null)
);
