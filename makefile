.PHONY: all copy exec clean

all: clean dest copy execfile exec

dest: 
	mkdir -p ./bin

copy:
	cp -t ./bin/ .env -R ./lib

execfile:
	echo '#! /usr/bin/env node' > ./bin/p2w && cat index.js >> ./bin/p2w

exec:
	chmod +x ./bin/p2w

clean:
	rm -rf ./bin/*
