import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { fetchHomes, clearHomes } from '../reducks/homes/operations';
import { getHomes } from '../reducks/homes/selectors';
import {getTags} from '../reducks/tags/selectors'
import HomesCard from '../components/Common/HomesCard';
import Header from '../components/Common/Header';

const Search = () => {
    const parsed = queryString.parse(window.location.search);
    const [search, setSearch] = useState(null);
    const [tagId, setTagId] = useState(null);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const homes = getHomes(selector);
    const tags = getTags(selector)

    useEffect(() => {
        if (parsed.search !== undefined) {
            setSearch(parsed.search);
        }
        if (parsed.tag_id !== undefined) {
            setTagId(parsed.tag_id);
        }
    }, []);

    useEffect(() => {
        if (search != null || tagId != null) {
            dispatch(clearHomes());
            dispatch(fetchHomes(search, tagId));
        }
    }, [search, tagId]);

    return (
        <>
            <section class="buy">
                <div class="head">
                    <h4>{parsed.tag_type ? parsed.tag_type : ''} homes near me</h4>
                    <ul class="images">
                        {homes.map(home => (
                            <HomesCard home={home} />
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Search;
