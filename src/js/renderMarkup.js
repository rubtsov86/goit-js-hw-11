import refs from "./refs";
import { fetchPictures } from "./fetchPictures";
import onSuccses from "./onSuccses";

export default function renderMarkup() {
  const inputValue = refs.formRef.elements.searchQuery.value;

    if (inputValue.trim() === '') {
        return
    }
  
  const fetchByInput = fetchPictures(inputValue);
  onSuccses(fetchByInput);
}