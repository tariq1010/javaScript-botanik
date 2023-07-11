import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";
import { storage } from "firebase";
import "firebase/storage";
export const EditSectionThreeHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionThree = async (id, data) => {
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
                const result = await SectionsService.editSectionThree(id, {
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
        const result = await SectionsService.editSectionThree(id, data);
        if (result.data) {
          setData(result.data);
          setLoading(false);
        }
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      // setLoading(false);
    }
  };

  return {
    editSectionThree,
    data,
    loading,
    error,
  };
};

export const GetSectionThreeHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const getSectionThree = async () => {
    try {
      setLoading(true);
      const result = await SectionsService.getSectionThree();
      if (result.response == "success" && result.data) {
        setData(result.data);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    getSectionThree,
    data,
    loading,
    error,
  };
};
