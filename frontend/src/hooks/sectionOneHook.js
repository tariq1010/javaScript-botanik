import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";
import firebase from "firebase/app";
import { storage } from "../firebase";
import "firebase/storage";

export const EditSectionOneHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionOne = async (id, data) => {
    try {
      setLoading(true);

      if (data.constructor === File) {
        try {
          const storageRef = storage.ref(`/tapera-jungle/${data?.name}`);
          const uploadTask = storageRef.put(data);

          uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => {
              console.log(error);
            },
            async () => {
              try {
                const downloadURL = await storageRef.getDownloadURL();
                const result = await SectionsService.editSectionOne(id, {
                  image_path: downloadURL,
                });
                if (result.data) {
                  setData(result.data);
                  setLoading(false);
                }
              } catch (error) {
                console.error("Error getting download URL:", error);
              }
            }
          );
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      } else {
        const result = await SectionsService.editSectionOne(id, { text: data });
        if (result.data) {
          setData(result.data);
          setLoading(false);
        }
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      //
    }
  };

  return {
    editSectionOne,
    data,
    loading,
    error,
  };
};

export const GetSectionOneHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const getSectionOne = async () => {
    try {
      setLoading(true);
      const result = await SectionsService.getSectionOne();
      setData(result.data);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    getSectionOne,
    data,
    loading,
    error,
  };
};
