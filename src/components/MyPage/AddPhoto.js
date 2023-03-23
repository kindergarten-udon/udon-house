import { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { updateProfile } from "firebase/auth";
import { auth } from "util/fbase";
import { storage } from "util/fbase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { uuidv4 } from "@firebase/util";

const AddPhoto = ({ onClose, userId, setUserProfile }) => {
  console.log(userId);
  const uuid = uuidv4();
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const test = acceptedFiles[0];
    const text = new FileReader();

    text.onloadend = (e) => {
      const {
        currentTarget: { result },
      } = e;
      setFile(test);
      setImageUrl(result);
    };
    text.readAsDataURL(test);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const handleUpload = async () => {
    if (userId) {
      const imageRef = ref(storage, `${userId.uid}/${uuid}`);
      console.log(imageUrl);
      const profile = await uploadString(imageRef, imageUrl, "data_url");
      const fileUrl = await getDownloadURL(profile.ref);
      updateProfile(auth.currentUser, {
        photoURL: fileUrl,
      });
      setUserProfile(fileUrl);
      alert("프로필 수정이 완료되었습니다");
      onClose();
    }
  };

  return (
    <div className="modalBlack">
      <div className="addPhotoConatiner">
        <div className="flex justify-beteween pl-28 gap-[30px]">
          <span className="w-[200px] text-xl text">프로필 사진 편집</span>
          <button className="imageButton bottom-[5px] bg-slate-100" onClick={onClose}>
            <AiOutlineCloseSquare className="popupIcon lg:left-[8px] lg:top-[10px] top-[7px] left-[4px]" />
            <span className="popupSpan lg:top-[-11px] top-[-14px] left-[10px] ">닫기</span>
          </button>
        </div>
        <div {...getRootProps()} className={`border-2 ${imageUrl ? "border-btn-green-color" : "border-gray-400"} border-dashed rounded-lg p-4 text-center mt-3`}>
          <input {...getInputProps()} />
          {imageUrl ? (
            <img src={imageUrl} alt="업로드 이미지" className="w-full rounded-lg object-cover" />
          ) : (
            <p className="text-gray-500">{isDragActive ? "여기에 이미지를 드롭하세요" : "이곳에 원하시는 이미지를 드래그하시거나 클릭해서 이미지를 선택해주세요."}</p>
          )}
        </div>
        {imageUrl && (
          <div>
            <button onClick={handleUpload} className="bg-btn-green-color text-white font-semibold py-2 px-4 rounded-lg mt-4">
              업로드
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPhoto;
