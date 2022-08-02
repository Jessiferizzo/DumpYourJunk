import { useStoreContext } from "../../utils/GlobalState";

const [state, dispatch] = useStoreContext();

const { categories } = state;

const { data: categoryData } = useQuery(QUERY_CATEGORIES);

import React, { useEffect } from 'react';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';