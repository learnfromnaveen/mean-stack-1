import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

var article = {
    "source": {
        "id": "cnbc",
        "name": "CNBC"
    },
    "author": "Jasmine Wu",
    "title": "RH is looking into a $300 million notes offering to pay down debt - CNBC",
    "description": "RH, previously known as Restoration Hardware, is considering a $300 million notes offering.",
    "url": "https://www.cnbc.com/2019/09/12/rh-is-looking-into-a-300-million-notes-offering-to-pay-down-debt.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/105470271-1537891118700gettyimages-645009566.jpg?v=1554240072",
    "publishedAt": "2019-09-12T15:09:18Z",
    "content": "RH, formerly known as Restoration Hardware, announced Thursday it is considering a $300 million convertible notes offering due in 2024.\r\nThe proceeds from the offering would be used primarily to retire the company's $200 million of second lien debt and reduce… [+1737 chars]"
};

function ArticleElement(props) {
    return (
        <article className="article">
            <h1>{props.articleDetail.title}</h1>
            <p><strong>Author:</strong> {props.articleDetail.author}, <strong>Published: </strong> {props.articleDetail.publishedAt} </p>
            <div>
                <img src={props.articleDetail.urlToImage} className="article-image"/>
                <span>source: {props.articleDetail.source.name}</span>
            </div>
            <p className="article-content">
                {props.articleDetail.content}
            </p>
        </article>
    )
}


const element = (
    <div className="article-container">
        <ArticleElement articleDetail={article} />
    </div>
);

ReactDOM.render(element, document.getElementById('root'));