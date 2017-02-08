.PHONY: all tmpl css links fmt lint pack

all: clean tmpl css links

clean:
	rm -rf out/*

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
	-rm jingxu.zip
	rm -rf _
	cp -RHL out _
	zip -r jingxu.zip _
