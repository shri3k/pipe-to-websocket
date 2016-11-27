$(VERBOSE).SILENT:

all: clean dest copy execfile 

dest: 
	mkdir -p ./bin

copy:
	cp -t ./bin/ .env -R ./lib -R ./config

execfile:
	echo '#! /usr/bin/env node' > ./bin/p2w && cat index.js >> ./bin/p2w

clean:
	rm -rf ./bin/*

.PHONY: all copy clean
