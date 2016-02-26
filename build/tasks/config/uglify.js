module.exports = function(grunt) {
	
	grunt.config.set('uglify', {
		js: {
		  options: {
			mangle: false,
			sourceMap: true,
			sourceMapIncludeSources: false
		  },
		  files: {
			'../www/resources/1.libraries.js': [
				'../www/js/libraries/primary/*.js',
				'../www/js/libraries/secondary/*.js',
				'../www/js/plugins/*.js'
			],
			'../www/resources/2.templates.js': [
				'../www/js/templates/**/*.js'
			],
			'../www/resources/3.tower_ghost.js': [
				'../www/js/tgd/*.js',
				//'!../www/js/tgd/base-definitions.js',
				'../www/js/app/*.js',
				'../www/js/extras/*.js'
			],
			'../www/resources/bootstrap.js': [
				'../www/js/tgd/base-definitions.js',
				'../www/js/core/firefox-xhr.js',
				'../www/js/core/idb.filesystem.js',
				'../www/js/core/cordova-app-loader-bootstrap.js'
			]
		  }
		},
		wp: {
		  options: {
			mangle: false,
			sourceMap: true,
			sourceMapIncludeSources: false
		  },
		  files: {
			'../www/resources/1.libraries.js': [
				'../www/js/libraries/primary/*.js',				
				'../www/js/libraries/secondary/*.js',
				'!../www/js/libraries/secondary/cordova-app-loader-complete.js',
				'../www/js/plugins/*.js'
			],
			'../www/resources/2.templates.js': [
				'../www/js/templates/**/*.js'
			],
			'../www/resources/3.tower_ghost.js': [
				'../www/js/tgd/*.js',
				'!../www/js/tgd/base-definitions.js',
				'!../www/js/tgd/updater.js',
				'../www/js/app/*.js',
				'../www/js/extras/*.js',
				'!../www/js/extras/buy.js'
			],
			'../www/resources/bootstrap.js': [
				'../www/js/tgd/base-definitions.js',
				'../www/js/core/cordova-app-loader-bootstrap.js'
			]
		  }
		},
		definitions: {
		  options: {
			mangle: false,
			sourceMap: false
		  },
		  files: {
			'../www/resources/en/definitions.json': ['../www/data/definitions/setDefs.json','../www/data/definitions/en/*.json'],
			'../www/resources/de/definitions.json': ['../www/data/definitions/setDefs.json','../www/data/definitions/de/*.json'],
			'../www/resources/es/definitions.json': ['../www/data/definitions/setDefs.json','../www/data/definitions/es/*.json'],
			'../www/resources/fr/definitions.json': ['../www/data/definitions/setDefs.json','../www/data/definitions/fr/*.json'],
			'../www/resources/it/definitions.json': ['../www/data/definitions/setDefs.json','../www/data/definitions/it/*.json'],
			'../www/resources/ja/definitions.json': ['../www/data/definitions/setDefs.json','../www/data/definitions/ja/*.json'],
			'../www/resources/pt-br/definitions.json': ['../www/data/definitions/setDefs.json','../www/data/definitions/pt-br/*.json']
		  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};