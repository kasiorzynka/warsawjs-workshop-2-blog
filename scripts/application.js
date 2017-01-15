/**
 * Created by kfrackie on 15.01.2017.
 * Kontroler
 */



(function (root) {
    'use strict'; //używaj zgodnie ze standardem
    let AddPostFormView = root.Blog.AddPostFormView;

    let Router = root.Blog.Router;

    class Application {
        constructor() {
            console.log('BOOM!');
            console.log('BOOM2!');

            this.setupListeners();  //musimy jej nasłuchiwać przed wystawieniem routera

            new Router();
        }

        setupListeners() {

            $(document).on('router:home', (event)=> this.onRouterHomeHandler());
            $(document).on('router:post', (event)=> this.onRouterPostHandler());

            /*
            $(document).on('router:home', function () {
                //console.log('home');
                //Przy zmianie trasy musimy wyczyścić kontener z index.html
                //Test http://localhost:8080/#/posts

                $('#view-container').empty();
                $('#view-container').html('<h1>Home</h1>');
            });
            $(document).on('router:post', function () {
                //console.log('router:post');
                //Przy zmianie trasy musimy wyczyścić kontener z index.html
                //Test http://localhost:8080/#/posts/354

                $('#view-container').empty();
                $('#view-container').html('<h1>Post</h1>');
            });
            */
            //Poniżej inny sposób
        }

        clearDOMContainer(){
            $('#view-container').empty();
        }

        onRouterHomeHandler(){
            //$('#view-container').empty();
            this.clearDOMContainer();
            //$('#view-container').html('<h1>Home</h1>');

            new AddPostFormView();
            //$('#add-post-form-view').html('<h1>Home???</h1>');
        }

        onRouterPostHandler(){
            //$('#view-container').empty();
            this.clearDOMContainer();
            $('#view-container').html('<h1>Post</h1>');
        }

    }
    new Application();


}(window));