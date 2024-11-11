
import { StickyWrapper } from '@/components/sticky-wrapper';
import Layout from '../Layout';
import { FeedWrapper } from '@/components/feed-wrapper';
import { Header } from './Header';
import CoursesList from '../courses-list';
function Home(){
    return(
        <Layout>

            <div className="flex flex-row-reverse gap-[48px] px-6">
                <StickyWrapper>
                    My sticky sidebar
                </StickyWrapper>
                <FeedWrapper>
                    <Header title="Yaqui">
                        
                    </Header>
                    <CoursesList></CoursesList>
                </FeedWrapper>
            </div>

        </Layout>

        
    )
}
export default Home;