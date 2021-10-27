import { configureStore } from '@reduxjs/toolkit';
import asyncAction from '../features/asyncAction';
import getChannelData from '../features/channelSlice';
import getComments from "../features/commentsSlice";
import controlSlice from '../features/controlSlice';
import loginSlice from "../features/LoginSlice";
export const store = configureStore({
  reducer: {
    auth:loginSlice,
    videos:asyncAction,
    channel:getChannelData,
    control:controlSlice,
    comments:getComments
    
    
    
  
}})
