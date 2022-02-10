// Notifications plugin imports
import { defaults, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaults.delay = 2000;
defaults.styling = 'brighttheme';

export default function notice(notice, response) {
  switch (notice) {
    case 'error':
      return error({
        title: 'Ошибка 404',
        text: 'Нет ни одного результата по вашему запросу',
      });
    case 'info':
      return info({
        title: 'Слишком много результатов поиска',
        text: 'Необходимо более специфичный запрос!',
      });
    case 'success':
      return success({
        title: 'Успех',
        text: `По вашему запросу было найдено: ${response.length} результатов`,
      });
  }
}
