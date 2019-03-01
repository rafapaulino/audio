/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        cssmin: {
			target: {
				files: {
					'css/player-audio.min.css': [
						'css/player-audio.css'
					]
				}
			}
        },
        uglify: {
            target: {
                files: {
                    'js/player-audio.min.js': [
                        'js/player-audio.js'
                    ]
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['cssmin','uglify']);

};