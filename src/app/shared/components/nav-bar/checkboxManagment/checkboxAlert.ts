export function confirmationAlert(): boolean{
    const title: string = "Are you sure?"
    if (confirm(title)) {
        return true;
      } else {
        return false;
      }
  }
