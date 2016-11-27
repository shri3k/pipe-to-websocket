.PHONY: all copy clean

all: clean dest copy execfile 

dest: 
	mkdir -p ./bin

copy:
	cp -t ./bin/ .env -R ./lib

execfile:
	echo '#! /usr/bin/env node' > ./bin/p2w && cat index.js >> ./bin/p2w

clean:
	rm -rf ./bin/*
