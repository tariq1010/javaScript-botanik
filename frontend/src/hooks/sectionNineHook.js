import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";
import { storage } from "../firebase";

export const EditSectionNineHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionNine = async (id, data) => {
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
                const result = await SectionsService.editSectionNine(id, {
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
        const result = await SectionsService.editSectionNine(id, data);
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
    editSectionNine,
    data,
    loading,
    error,
  };
};

export const GetSectionNineHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const getSectionNine = async () => {
    try {
      setLoading(true);
      const result = await SectionsService.getSectionNine();
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
    getSectionNine,
    data,
    loading,
    error,
  };
};
