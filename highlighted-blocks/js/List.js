'use strict';

const VideoWithBox = ComponentWithBox(Video);
const ArticleWithBox = ComponentWithBox(Article);

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return <VideoWithBox {...item}/>;

            case 'article':
                return <ArticleWithBox {...item}/>;
        }
    });
};
