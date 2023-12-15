import React from "react";
// import axios from 'axios';

import Header from './Header.js';
import Footer from './Footer.js';

class Blogs extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            data : [],
            basePath: '/images/blog/',
            totalblog: 0,
            pageId: 1,
            htmlPagenation:[], 
            loading:true
        };
    }
    componentDidMount() {
        let pageId = '';
        let slug = window.location.pathname;
        let pageSlug = slug.trim().split('/');
        if(pageSlug.length === 3){
            pageId = pageSlug[2];
            this.setState({
                pageId: pageSlug[2]
            });
        } else {
            pageId = this.state.pageId;
        }

        fetch('http://localhost:3007/api/blogs?page='+pageId)
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
            })
            .then(data => {
            // Handle the successful response here
            let htmlPagenation = [];
            for (let i = 1; i <= (data.totalblog / 6); i++) {
                let tactive = '';
                if(i === 1){
                    tactive = "active";
                }
                htmlPagenation.push(<li class={tactive}><a href={"/blog/"+i}>{i}</a></li>);
            }
                this.setState({
                    data: data.data,
                    loading: false,
                    totalblog: data.totalblog,
                    htmlPagenation : htmlPagenation
                });
            })
            .catch(error => {
            // Handle any errors here
            console.error('Error:', error);
            this.setState({
                loading: false,
            });
        });
    } 

    render() {
        const { data, basePath,htmlPagenation,pageId} = this.state;
        
        return(
            <div>
                <Header/>
                <main id="main">
                <div class="breadcrumbs">
                    <div class="page-header d-flex align-items-center">
                        <div class="container position-relative">
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-12 text-center">
                                    <h2>Blogs{pageId}</h2>
                                    <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <div class="container">
                        <ol>
                            <li><a href="/home">Home</a></li>
                            <li>Blogs</li>
                        </ol>
                        </div>
                    </nav>
                </div>
            <section id="blog" class="blog">
                <div class="container" data-aos="fade-up">
                    <div class="row gy-4 posts-list">
                        {data.map(item => (
                        <div class="col-xl-4 col-md-6">
                            <article>
                                <div class="post-img">
                                    <img src={basePath +item.image} alt={item.image} class="img-fluid"/>
                                </div>
                                <p class="post-category">{item.category}</p>
                                <h2 class="title">
                                    <a href={"/blog-detail/"+item.id}>{item.name}</a>
                                </h2>
                                <div class="d-flex align-items-center">
                                    <img src={basePath + item.user_image} alt={item.user_image} class="img-fluid post-author-img flex-shrink-0"/>
                                    <div class="post-meta">
                                        <p class="post-author-list">{item.user_name}</p>
                                        <p class="post-date">
                                            <time datetime="2022-01-01">Jan 1, 2022</time>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        ))}
                    </div>
                    <div class="blog-pagination">
                    <ul class="justify-content-center">
                        {htmlPagenation}
                    </ul>
                    </div>
                </div>
                </section>
                </main>
                <Footer/>
            </div>       
        )
    }
}
export default Blogs;