.PHONY: all fmt lint css pack

all: css
	tsc && node .

fmt:
	tsfmt -r `find ./src -name "*.tsx"`

lint:
	tslint --project tsconfig.json

css:
	lessc less/style.less out/style.css

pack:
	rm -rf _
	cp -RHL out _
	cd _ && tar cvzf ../dist.tgz .
