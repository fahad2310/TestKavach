import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Updates = () => {
  const navigate = useNavigate();

  const onListMenuContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/devices");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/map");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/terminal");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/networks");
  }, [navigate]);

  const onListMenuContainer6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-black w-full h-[64rem] overflow-hidden text-left text-[1.13rem] text-grey font-inter">
      <img
        className="absolute top-[0rem] left-[0rem] w-[103.47rem] h-[52.4rem]"
        alt=""
        src="/bg.svg"
      />
      <div className="absolute top-[7.38rem] left-[2.56rem] w-[14.56rem] h-[49.81rem]">
        <div
          className="absolute top-[0rem] left-[0.25rem] flex flex-row items-start justify-start gap-[1.19rem] cursor-pointer text-white"
          onClick={onListMenuContainerClick}
        >
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/icon--24--dasboard.svg"
          />
          <div className="relative font-medium">Dashboard</div>
        </div>
        <div className="absolute top-[4.13rem] left-[0rem] flex flex-col items-start justify-start gap-[2.25rem]">
          <div
            className="relative w-[7rem] h-[1.5rem] cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <div className="absolute top-[0rem] left-[0rem] flex flex-row items-start justify-start gap-[1.19rem]">
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/router.svg"
              />
              <div className="relative font-medium">Devices</div>
            </div>
          </div>
          <div
            className="relative w-[11.31rem] h-[1.5rem] cursor-pointer"
            onClick={onGroupContainer1Click}
          >
            <div className="absolute top-[0rem] left-[0rem] flex flex-row items-start justify-start gap-[1.19rem]">
              <img
                className="relative w-[1.5rem] h-[1.5rem] object-cover"
                alt=""
                src="/image-1@2x.png"
              />
              <div className="relative font-medium">Map Generation</div>
            </div>
          </div>
          <div
            className="relative w-[13.13rem] h-[1.5rem] cursor-pointer"
            onClick={onGroupContainer2Click}
          >
            <div className="absolute top-[0rem] left-[0rem] flex flex-row items-start justify-start gap-[1.19rem]">
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/icon--24--protocols.svg"
              />
              <div className="relative font-medium">Command Terminal</div>
            </div>
          </div>
          <div
            className="relative w-[7.88rem] h-[1.5rem] cursor-pointer"
            onClick={onGroupContainer3Click}
          >
            <div className="absolute top-[0rem] left-[0rem] flex flex-row items-start justify-start gap-[1.19rem]">
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/icon--24--setting.svg"
              />
              <div className="relative font-medium">Networks</div>
            </div>
          </div>
          <div className="relative w-[14.56rem] h-[3.5rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-2xl bg-darkgreen w-[14.56rem] h-[3.5rem]" />
            <div className="absolute top-[1rem] left-[1.5rem] flex flex-row items-start justify-start gap-[1.19rem]">
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/update.svg"
              />
              <div className="relative font-medium">Updates</div>
            </div>
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
        <div className="absolute top-[48.31rem] left-[0.25rem] flex flex-row items-start justify-start gap-[1.19rem]">
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
      <div className="absolute top-[2.63rem] left-[79.69rem] w-[7.81rem] h-[3rem]">
        <div className="absolute top-[0.81rem] left-[0rem] font-medium">
          Evano
        </div>
        <img
          className="absolute top-[0rem] left-[4.81rem] rounded-[50%] w-[3rem] h-[3rem] object-cover"
          alt=""
          src="/ellipse-1@2x.png"
        />
      </div>
      <div className="absolute top-[3.31rem] left-[19.19rem] text-[1.5rem] font-semibold font-roboto text-white">
        Welcome Back, Arkhan
      </div>
      <div className="absolute top-[3.19rem] left-[2.56rem] w-[9.5rem] h-[1.94rem] text-[1.63rem] text-white font-urbanist">
        <div className="absolute top-[0rem] left-[2.5rem] font-black">
          Systumm
        </div>
        <div className="absolute top-[0.19rem] left-[0rem] w-[1.75rem] h-[1.75rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-t-[3.82px] rounded-br-none rounded-bl-[3.82px] bg-white w-[0.8rem] h-[0.8rem]" />
          <div className="absolute top-[0rem] left-[1.75rem] rounded-t-[3.82px] rounded-br-none rounded-bl-[3.82px] bg-white w-[0.8rem] h-[0.8rem] [transform:_rotate(180deg)] [transform-origin:0_0]" />
          <div className="absolute top-[1.75rem] left-[0rem] rounded-t-[3.82px] rounded-br-none rounded-bl-[3.82px] bg-white w-[0.8rem] h-[0.8rem]" />
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

export default Updates;
