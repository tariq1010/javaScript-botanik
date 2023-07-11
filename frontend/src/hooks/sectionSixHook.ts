import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";
import { storage } from "firebase";

export const EditSectionSixHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionSix = async (id, data) => {
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
                const result = await SectionsService.editSectionSix(id, {
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
        const result = await SectionsService.editSectionSix(id, data);
        if (result.data) {
          setData(result.data);
          setLoading(false);
        }
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
    }
  };

  return {
    editSectionSix,
    data,
    loading,
    error,
  };
};

export const GetSectionSixHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const getSectionSix = async () => {
    try {
      setLoading(true);
      const result = await SectionsService.getSectionSix();
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
    getSectionSix,
    data,
    loading,
    error,
  };
};
