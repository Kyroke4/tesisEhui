
import { StickyWrapper } from '@/components/sticky-wrapper';
import Layout from './Layout';
import { FeedWrapper } from '@/components/feed-wrapper';
import { Header } from './Header';
function Page(){
    return(
        <Layout>
            <div className="flex flex-row-reverse gap-[48px] px-6">
                <StickyWrapper>
                <p>
                        Ebetchi’ibo kaa taataria ayune <br />
                        Ebetchi’ibo kaa kokowame ayune<br />
                        Ebetchi’ibo kaa kososi ewame ayune<br />
                        Ebetchi’ibo kaa tataliwame ayune<br />
                        Ba’a ji’ipewamwe juNi tebauriwamejuNi yuku juNi<br />
                        Jeka juNi kokoiwame juNi<br />
                        Wawaira juNi kaitatune<br />

                        Kaita majjaiwame kaita et ayune<br />
                        Si’ime inii kaitatune ebetchi’ibo<br />
                        Senu weemw ama ayuk kaa koptanee<br />
                        Em ibaktaka’u tu’isi aet<br />
                        Yuma’ane makwakau<br />
                        Junama empo ta’awane<br />
                        Jak junii yoemiata beas kikteka am Jin’neusim’nee pueplota at teakame elebenak Ojbokame waa jiak kostumrem Tekia yaura<br />
                        Empo ama emo yumaletek Lijota nesaupo emo jipune<br />
                        ¡ EHUI ¡<br />
                </p>
                </StickyWrapper>
                <FeedWrapper>
                    <Header title="Juramento Yaqui">
                        
                    </Header>
                    <p>
                        Para ti no habrá ya sol<br />
                        Para ti no habrá ya muerte<br />
                        Para ti no habrá ya dolor<br />
                        Para ti no habrá ya calor<br />
                        Ni sed, Ni hambre, Ni lluvia<br />
                        Ni aire, Ni enfermedades<br />
                        Ni familia<br />

                        Nada podrá atemorizarte<br />
                        todo ha concluido para ti<br />
                        excepto una cosa<br />
                        el cumplimiento del deber<br />
                        en el puesto que se te designe,<br />
                        ahí quedarás por la defensa de tu nación, de tu puesto,<br />
                        de tu raza, de tus costumbres, de tu religión<br />
                        ¿Juras cumplir con el mandato divino?<br />
                    ¡SÍ!<br />
                    </p>
                    <p className="lg:hidden pt-10">
                        Ebetchi’ibo kaa taataria ayune <br />
                        Ebetchi’ibo kaa kokowame ayune<br />
                        Ebetchi’ibo kaa kososi ewame ayune<br />
                        Ebetchi’ibo kaa tataliwame ayune<br />
                        Ba’a ji’ipewamwe juNi tebauriwamejuNi yuku juNi<br />
                        Jeka juNi kokoiwame juNi<br />
                        Wawaira juNi kaitatune<br />

                        Kaita majjaiwame kaita et ayune<br />
                        Si’ime inii kaitatune ebetchi’ibo<br />
                        Senu weemw ama ayuk kaa koptanee<br />
                        Em ibaktaka’u tu’isi aet<br />
                        Yuma’ane makwakau<br />
                        Junama empo ta’awane<br />
                        Jak junii yoemiata beas kikteka am Jin’neusim’nee pueplota at teakame elebenak Ojbokame waa jiak kostumrem Tekia yaura<br />
                        Empo ama emo yumaletek Lijota nesaupo emo jipune<br />
                        ¡ EHUI ¡<br />
                </p>
                </FeedWrapper>
            </div>
        </Layout>

        
    )
}
export default Page;