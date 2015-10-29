module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

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


        webpack: {
          prod: {
              devtool: 'source-map',
              entry: "./js/main.jsx",
              output: {
                  path: "./static/js/",
                  filename: "build.js"
              },
              module: {
                  loaders: [
                      {
                          //tell webpack to use jsx-loader for all *.jsx files
                          test: /\.jsx$/,
                          loader: 'jsx-loader?insertPragma=React.DOM&harmony'
                      },
                      {
                          test: /\.jsx$/,
                          loader: 'babel-loader'
                      }
                  ]
              }
          }
        },

		uglify: {
			js: {
				files: {
					'static/js/build.min.js': 'static/js/build.js'
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
                files: ['js/main.jsx', 'js/components/*.js*', 'gruntFile.js'],
                tasks: ['webpack:prod']
            }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-webpack');

	grunt.registerTask('default', ['sass:dev', 'webpack:prod', 'watch']);
    grunt.registerTask('build', ['sass:prod', 'cssmin', 'webpack:prod', 'uglify']);
};