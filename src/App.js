import BaiTapTongHop from "./BaiTapTongHop/BaiTapTongHop";
import ChunkLodash from "./Lodash/ChunkLodash";
import CompareObjArr from "./Lodash/CompareObjArr";
import FillLodash from "./Lodash/FillLodash";
import FlattentLodash from "./Lodash/FlattentLodash";
import Include from "./Lodash/Include";
import JoinDemo from "./Lodash/JoinDemo";
import LastFirstLodash from "./Lodash/LastFirstLodash";
import SortLodash from "./Lodash/SortLodash";
import UniqLodash from "./Lodash/UniqLodash";
import BaiTapChiaLayout from "./TailWindComponent/BaiTapChiaLayout";
import CustomCssDemo from "./TailWindComponent/CustomCssDemo";
import DemoBorderRadius from "./TailWindComponent/DemoBorderRadius";
import DemoFlex from "./TailWindComponent/DemoFlex";
import DemoGrid from "./TailWindComponent/DemoGrid";
import DemoPadding from "./TailWindComponent/DemoPadding";
import DemoTextBackGround from "./TailWindComponent/DemoTextBackGround";
import DemoWidthHeight from "./TailWindComponent/DemoWidthHeight";
import ResponsiveComponentDemo from "./TailWindComponent/ResponsiveComponentDemo";

function App() {
    return (
        <div className="App">
            {/**=============Tailwin================ */}
            {/* <DemoGrid /> */}
            {/* <DemoPadding /> */}
            {/* <DemoWidthHeight /> */}
            {/* <DemoFlex /> */}
            {/* <DemoTextBackGround /> */}
            {/* <DemoBorderRadius /> */}
            {/* <ResponsiveComponentDemo /> */}
            {/* <CustomCssDemo /> */}
            {/* <BaiTapChiaLayout /> */}

            {/* =============Lodash=============== */}
            {/* <JoinDemo /> */}
            {/* <LastFirstLodash /> */}
            {/* <ChunkLodash /> */}
            {/* <FillLodash /> */}
            {/* <SortLodash /> */}
            {/* <Include /> */}
            {/* <UniqLodash /> */}
            {/* <FlattentLodash /> */}
            {/* <CompareObjArr /> */}

            {/**=============Bài Tập=============== */}
            <BaiTapTongHop />
        </div>
    );
}

export default App;
