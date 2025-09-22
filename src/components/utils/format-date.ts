import { format, formatDistanceToNow } from "date-fns";

import { ptBR } from "date-fns/locale";

export function timeAgo(date: string) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  });
}

export function formatDatetime(date: string) {
  return format(new Date(date), "dd/MM/yyyy", {
    locale: ptBR,
  });
}
