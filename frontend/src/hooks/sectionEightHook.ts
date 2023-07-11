import { SectionsService } from "services/sectionsServices";
import { CommonHook } from "./commonHook";
import { storage } from "firebase";

export const EditSectionEightHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const editSectionEight = async (id, data) => {
    try {
      setLoading(true);

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
              const result = await SectionsService.editSectionEight(id, {
                image_path: downloadURL,
              });
              if (result.data) {
                setData(result.data);
                setLoading(false);
              }
            } catch (error) {
              setLoading(false);

              console.error("Error getting download URL:", error);
            }
          }
        );
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
    }
  };

  return {
    editSectionEight,
    data,
    loading,
    error,
  };
};

export const AddSectionEightHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const addSectionEight = async (data) => {
    try {
      setLoading(true);
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
              const result = await SectionsService.addSectionEight({
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
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
    }
  };

  return {
    addSectionEight,
    data,
    loading,
    error,
  };
};

export const GetSectionEightHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const getSectionEight = async () => {
    try {
      setLoading(true);
      const result = await SectionsService.getSectionEight();
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
    getSectionEight,
    data,
    loading,
    error,
  };
};

export const DeleteSectionEightHook = () => {
  const { data, setData, setError, loading, setLoading, error } = CommonHook();
  const deleteSectionEight = async (id, getSectionEight) => {
    try {
      setData(null);
      setLoading(true);
      const result = await SectionsService.deleteSectionEight(id);
      if (result.response == "success") {
        setData(result.data);
        getSectionEight();
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteSectionEight,
    data,
    loading,
    error,
  };
};
