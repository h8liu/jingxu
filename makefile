.PHONY: all

all: css
	tsc && node .

fmt:
	tsfmt -r `find ./src -name "*.tsx"`

lint:
	tslint --project tsconfig.json

css:
	lessc less/style.less out/style.css
