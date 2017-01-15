/**
 * Created by kfrackie on 15.01.2017.
 */
/*
 Klasa, konstruktor, console log, odpalić w controlerze.constructor
 */

/**
 * Created by kfrackie on 15.01.2017.
 *
 */

(function (root) {
    'use strict'; //używaj zgodnie ze standardem

    class AddPostFormView {
        constructor() {
            console.log('AddPostFormView!');
            //1. Pobrać template z DOM
            this.template = $('#template-add-post').html();  //('<h1>Home???</h1>')
            console.log(this.template);

            //2. Wyrenderować!
            this.render();

            //3. Pobrać referencje do formularza
            //View -> Controler -> Midel
            this.$form=$('#add-post-form');

            this.setupListeners();

            //4. Ustawić listenery na submit formularza


        }

        setupListeners(){
            this.$form.submit((event)=>this.submitFormHandler(event))
        }
        submitFormHandler(){
            console.log(event);
        }

        render() {
            let $container = $('#view-container');
            console.log($container);

            let templateCompiled = root.Handlebars.compile(this.template);
            $container.append(templateCompiled);
        }

    }
    root.Blog.AddPostFormView = AddPostFormView;

}(window));
