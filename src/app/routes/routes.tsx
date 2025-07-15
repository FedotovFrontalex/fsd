import { createBrowserRouter } from 'react-router'
import { CategoryPage } from '@/pages/category'
import { MainPage } from '@/pages/main'
import { RaitingPage } from '@/pages/raiting'
import { CommunityPage, EditProfilePage, ProfilePage } from '@/pages/user'
import { Layout } from '../layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: MainPage },
      { path: 'community', Component: CommunityPage },
      { path: ':category', Component: CategoryPage },
      { path: 'article', children: [
        {path: ':alias', Component: RaitingPage}
      ]},
      { path: 'profile',  children: [
        { index: true, Component: ProfilePage },
        { path: 'edit', Component: EditProfilePage }
      ]}
    ]
  },
])