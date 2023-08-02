import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const onListMenuContainer1Click = useCallback(() => {
    navigate("/devices");
  }, [navigate]);

  const onListMenuContainer2Click = useCallback(() => {
    navigate("/map");
  }, [navigate]);

  const onListMenuContainer3Click = useCallback(() => {
    navigate("/terminal");
  }, [navigate]);

  const onListMenuContainer4Click = useCallback(() => {
    navigate("/networks");
  }, [navigate]);

  const onListMenuContainer5Click = useCallback(() => {
    navigate("/updates");
  }, [navigate]);

  const onListMenuContainer6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-black w-full h-[64rem] overflow-hidden text-left text-[1.13rem] text-white font-inter">
      <img
        className="absolute top-[0rem] left-[0rem] w-[103.47rem] h-[52.4rem]"
        alt=""
        src="/bg3.svg"
      />
      <div className="absolute top-[7.38rem] left-[2.81rem] w-[14.69rem] h-[50.88rem] text-grey">
        <div className="absolute top-[0rem] left-[0rem] rounded-2xl bg-darkgreen w-[14.56rem] h-[3.5rem]" />
        <div className="absolute top-[1rem] left-[1.56rem] flex flex-row items-start justify-start gap-[1.19rem] text-white">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/icon--24--dasboard.svg"
          />
          <div className="relative font-medium">Dashboard</div>
        </div>
        <div className="absolute top-[5.75rem] left-[1.56rem] flex flex-col items-start justify-start gap-[2.25rem]">
          <div
            className="flex flex-row items-start justify-start gap-[1.19rem] cursor-pointer"
            onClick={onListMenuContainer1Click}
          >
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/router2.svg"
            />
            <div className="relative font-medium">Devices</div>
          </div>
          <div
            className="flex flex-row items-start justify-start gap-[1.19rem] cursor-pointer"
            onClick={onListMenuContainer2Click}
          >
            <img
              className="relative w-[1.5rem] h-[1.5rem] object-cover"
              alt=""
              src="/image-1@2x.png"
            />
            <div className="relative font-medium">Map Generation</div>
          </div>
          <div
            className="flex flex-row items-start justify-start gap-[1.19rem] cursor-pointer"
            onClick={onListMenuContainer3Click}
          >
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/icon--24--protocols.svg"
            />
            <div className="relative font-medium">Command Terminal</div>
          </div>
          <div
            className="flex flex-row items-start justify-start gap-[1.19rem] cursor-pointer"
            onClick={onListMenuContainer4Click}
          >
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/icon--24--setting.svg"
            />
            <div className="relative font-medium">Networks</div>
          </div>
          <div
            className="flex flex-row items-start justify-start gap-[1.19rem] cursor-pointer"
            onClick={onListMenuContainer5Click}
          >
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/update.svg"
            />
            <div className="relative font-medium">Updates</div>
          </div>
          <div
            className="flex flex-row items-start justify-start gap-[1.19rem] cursor-pointer"
            onClick={onListMenuContainer6Click}
          >
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/icon--24--user.svg"
            />
            <div className="relative font-medium">Profile</div>
          </div>
        </div>
        <div className="absolute top-[49.38rem] left-[1.56rem] flex flex-row items-start justify-start gap-[1.19rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/logout1-1.svg"
          />
          <div className="relative font-medium">Log Out</div>
        </div>
      </div>
      <div className="absolute top-[2.63rem] left-[47.19rem] w-[20.44rem] h-[3rem] text-darkgray-100">
        <div className="absolute top-[0rem] left-[0rem] rounded-2xl bg-gray-200 w-[17.56rem] overflow-hidden flex flex-row py-[0.75rem] pr-[5rem] pl-[1rem] box-border items-center justify-start gap-[1.25rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/icon--24--search.svg"
          />
          <div className="relative font-medium">Search</div>
        </div>
        <div className="absolute top-[0.56rem] left-[18.81rem] w-[1.63rem] h-[1.69rem] text-[0.5rem] text-white">
          <img
            className="absolute top-[0.19rem] left-[0rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
            alt=""
            src="/icon--24--notification.svg"
          />
          <div className="absolute top-[0rem] left-[0.75rem] rounded-81xl bg-red w-[0.88rem] flex flex-col p-[0.13rem] box-border items-center justify-center">
            <b className="relative">6</b>
          </div>
        </div>
      </div>
      <div className="absolute top-[2.63rem] left-[79.69rem] w-[7.81rem] h-[3rem] text-grey">
        <div className="absolute top-[0.81rem] left-[0rem] font-medium">
          Evano
        </div>
        <img
          className="absolute top-[0rem] left-[4.81rem] rounded-[50%] w-[3rem] h-[3rem] object-cover"
          alt=""
          src="/ellipse-1@2x.png"
        />
      </div>
      <div className="absolute top-[3.31rem] left-[19.19rem] text-[1.5rem] font-semibold font-roboto">
        Welcome Back, Arkhan
      </div>
      <div className="absolute top-[3.19rem] left-[2.56rem] w-[9.5rem] h-[1.94rem] text-[1.63rem] font-urbanist">
        <div className="absolute top-[0rem] left-[2.5rem] font-black">
          Systumm
        </div>
        <div className="absolute top-[0.19rem] left-[0rem] w-[1.75rem] h-[1.75rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-t-[3.82px] rounded-br-none rounded-bl-[3.82px] bg-white w-[0.8rem] h-[0.8rem]" />
          <div className="absolute top-[0rem] left-[1.75rem] rounded-t-[3.82px] rounded-br-none rounded-bl-[3.82px] bg-white w-[0.8rem] h-[0.8rem] [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <div className="absolute top-[1.75rem] left-[0rem] rounded-t-[3.82px] rounded-br-none rounded-bl-[3.82px] bg-white w-[0.8rem] h-[0.8rem]" />
        </div>
      </div>
      <div className="absolute top-[8.13rem] left-[19.06rem] w-[68.31rem] h-[9.94rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[68.31rem] h-[9.94rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-2xl bg-gray-100 [backdrop-filter:blur(20px)] w-[68.31rem] h-[9.94rem] opacity-[0.6]" />
          <div className="absolute h-[69.81%] w-[22.04%] top-[15.09%] right-[26.36%] bottom-[15.09%] left-[51.6%]">
            <div className="absolute h-full w-[99.7%] top-[0%] right-[0.3%] bottom-[0%] left-[0%] rounded-[13.75px] bg-darkgray-200" />
            <div className="absolute top-[0.63rem] left-[0.94rem] font-medium inline-block w-[14.12rem] h-[2.44rem]">
              Connected Clients
            </div>
          </div>
        </div>
        <div className="absolute h-[69.81%] w-[21.98%] top-[15.09%] right-[75.73%] bottom-[15.09%] left-[2.29%]">
          <div className="absolute h-full w-[99.94%] top-[0%] right-[0.06%] bottom-[0%] left-[0%] rounded-[13.75px] bg-darkgray-200" />
          <div className="absolute top-[0.63rem] left-[0.9rem] font-medium inline-block w-[14.12rem] h-[2.44rem]">
            System Status
          </div>
        </div>
        <div className="absolute h-[69.81%] w-[24.16%] top-[15.09%] right-[48.85%] bottom-[15.09%] left-[26.99%]">
          <div className="absolute h-full w-[90.98%] top-[0%] right-[9.02%] bottom-[0%] left-[0%] rounded-[13.75px] bg-darkgray-200" />
          <div className="absolute top-[0.75rem] left-[0.44rem] font-medium inline-block w-[16.07rem] h-[2.31rem]">
            Disk Usage
          </div>
        </div>
        <div className="absolute h-[69.81%] w-[21.98%] top-[15.09%] right-[2.26%] bottom-[15.09%] left-[75.75%]">
          <div className="absolute h-full w-[99.94%] top-[0%] right-[0.06%] bottom-[0%] left-[0%] rounded-[13.75px] bg-darkgray-200" />
          <div className="absolute top-[0.63rem] left-[0.9rem] font-medium inline-block w-[14.12rem] h-[2.44rem]">
            SSID’s Collected
          </div>
        </div>
      </div>
      <div className="absolute top-[19.31rem] left-[19.06rem] w-[33.06rem] h-[9.88rem] text-[1.25rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-gray-100 [backdrop-filter:blur(20px)] w-[33.06rem] h-[9.88rem] opacity-[0.6]" />
        <div className="absolute top-[1.03rem] left-[0.93rem] font-semibold inline-block w-[13.52rem] h-[1.54rem]">
          Connected Clients
        </div>
      </div>
      <div className="absolute top-[27.56rem] left-[54.31rem] w-[33.19rem] h-[24.63rem] text-[1.25rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-gray-100 [backdrop-filter:blur(20px)] w-[33.19rem] h-[24.63rem] opacity-[0.6]" />
        <div className="absolute top-[2.56rem] left-[0.93rem] font-semibold inline-block w-[13.57rem] h-[3.84rem]">
          Wireless Landscape
        </div>
      </div>
      <div className="absolute top-[19.31rem] left-[54rem] w-[31.81rem] h-[6.88rem] text-[1.25rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-gray-100 [backdrop-filter:blur(20px)] w-[31.81rem] h-[6.88rem] opacity-[0.6]" />
        <div className="absolute top-[0.71rem] left-[0.89rem] font-semibold inline-block w-[13.01rem] h-[1.07rem]">
          Notification
        </div>
      </div>
      <div className="absolute top-[30.56rem] left-[19.19rem] w-[33.06rem] h-[9.88rem] text-[1.25rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-gray-100 [backdrop-filter:blur(20px)] w-[33.06rem] h-[9.88rem] opacity-[0.6]" />
        <div className="absolute top-[1.07rem] left-[0.94rem] font-semibold inline-block w-[13.52rem] h-[1.54rem]">
          Campaigns
        </div>
      </div>
      <img
        className="absolute h-[2.44%] w-[1.74%] top-[5.18%] right-[21.46%] bottom-[92.38%] left-[76.81%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/rectangle14.svg"
      />
    </div>
  );
};

export default Dashboard;
