/**
 * Created by kfrackie on 15.01.2017.
 */

(function (root) {
        'use strict'; //używaj zgodnie ze standardem
        class Router {
            constructor() {
                //console.log('New Router!');
                this.router = new root.Routy.Router();
                console.log(this.router);

                this.setupRoutes(); ////

                this.router.run();

            }

            setupRoutes() { //dodajemy trasy (w przeglądarce będą wywołane po # na )
                this.router
                    /*
                    .add('/posts', function () { //pierwsza trasa http://localhost:8080/#/posts
                        console.log('posts');
                    })
                    .add('/posts/:id', function () { //druga trasa np. http://localhost:8080/#/posts/123 albo inne ID
                        console.log('posts id');
                    })
                    */

                    .add('/posts', function () { //pierwsza trasa http://localhost:8080/#/posts
                        $(document).trigger('router:home');
                    })
                    .add('/posts/:id', function () { //druga trasa np. http://localhost:8080/#/posts/123 albo inne ID
                        $(document).trigger('router:post');
                    })

                    .otherwise('/posts')
            }
        }

        //new Router();
        root
            .Blog
            .Router = Router;

    }
    (window)
);