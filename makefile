.PHONY: all tmpl css links fmt lint pack

all: tmpl css links

tmpl:
	tsc && node .

css:
	lessc less/style.less out/style.css

links:
	mkdir -p out
	ln -s ../images out/.
	ln -s ../papers out/.

fmt:
	tsfmt -r `find ./src -name "*.tsx"`

lint:
	tslint --project tsconfig.json

pack:
	rm -rf _
	cp -RHL out _
	cd _ && tar cvzf ../dist.tgz .
