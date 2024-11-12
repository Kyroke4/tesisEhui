
import { StickyWrapper } from '@/components/sticky-wrapper';
import Layout from './Layout';
import { FeedWrapper } from '@/components/feed-wrapper';
import { Header } from './Header';

function Page(){
    return(
        <Layout>
            <div className="flex flex-row-reverse gap-[48px] px-6">
                {/* <StickyWrapper>
                
                </StickyWrapper> */}
                <FeedWrapper>
                    <Header title="Cuentos Yaqui">
                        
                    </Header>
                    <embed className="w-full  rounded-xl bg-amber-500 p-5 text-white flex items-center justify-between mb-4" src="../../pdf/CuentosYaqui.pdf" width="600" height="700" type="application/pdf"></embed>

                </FeedWrapper>
            </div>
        </Layout>

        
    )
}
export default Page;