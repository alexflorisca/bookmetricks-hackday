module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Lint all javascript files
		jshint: {
		  // define the files to lint
		  files: ['gruntfile.js', 'js/**/*.js'],
		  // configure JSHint (documented at http://www.jshint.com/docs/)
		  options: {
		      // more options here if you want to override JSHint defaults
		    globals: {
		      jQuery: true,
		      console: true,
		      module: true,
		      angular: true
		    }
		  }
		},


		sass: {
			dev: {
                options: {
                    style: 'expanded',
                    sourcemap: 'auto'
                },
				files: [{
					expand: true,
					cwd: 'scss',
					src: ['style.scss'],
					dest: 'static/css',
					ext: '.css'
				}]
			},

            prod: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['style.scss'],
                    dest: 'static/css',
                    ext: '.css'
                }]
            }
		},


        browserify: {
            options: {
              extension: ["jsx"]
            },
            dev: {
                options: {
                    // Add source maps
                    transform: ["babelify"],
                    browserifyOptions: {
                        debug: true
                    }
                },
                src: [
                    'js/main.js'
                ],
                dest: 'static/js/build.js'
            },
            prod: {
                options: {
                    transform: ["babelify"],
                    browserifyOptions: {
                        debug: false
                    }
                },
                src: '<%= browserify.dev.src %>',
                dest:'static/js/build.js'
            }
        },

		uglify: {
			js: {
                options: {
                    sourceMap: true
                },
				files: {
					'static/js/build.min.js': ['<%= browserify.prod.dest %>']
				}
			}
		},


		cssmin: {
			css: {
				files: {
					'css/style.min.css': ['css/style.css']
				}
			}
		},


		watch: {
            css: {
                files: ['scss/**/*.scss', 'gruntFile.js'],
                tasks: ['sass']
            },

            js: {
                files: ['js/main.js', 'js/components/*.js*', 'gruntFile.js'],
                tasks: ['browserify:dev']
            }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

	grunt.registerTask('default', ['sass:dev', 'browserify:dev', 'watch']);
    grunt.registerTask('build', ['sass:prod', 'cssmin', 'browserify:prod', 'uglify', 'watch']);
};