import React from 'react';
import './SearchPage.css'
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from "./response";
import { Link } from "react-router-dom";
import Search from './Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    //const data = Response;

    console.log(data);
    return (
        //jshint ignore:start
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img 
                        className="searchPage_logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt=""
                    />
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons />
                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/all">전체</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon />
                                <Link to="/news">뉴스</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon />
                                <Link to="/images">이미지</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon />
                                <Link to="/shopping">쇼핑</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomIcon />
                                <Link to="/maps">맵</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon />
                                <Link to="/more">더보기</Link>
                            </div>
                        </div>

                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">설정</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">도구</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term && (
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                        검색결과 약 {data?.searchInformation.formattedTotalResults}개 ({data?.searchInformation.formattedSearchTime}초)
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage_result">
                            <a href={item.link} className="searchPage_link">
                                {item.displayLink} ▼
                            </a>
                            <a className="searchPage_resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage_resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
            
        </div>
        //jshint ignore:end
    );
}

export default SearchPage;
