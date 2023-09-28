export interface Video {
    username: string;
    category: string;
    tags: string[];
    description: string;
    video: string;
    image: string;
}


export class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            filters: []
        };
    }

    render() {
        const { videos, filters } = this.state;
        const filteredVideos = videos.filter(video => {
            const matchedVideo = video.category.includes(this.state.filters.category);
            return matchedVideo;
        });
    }
}
