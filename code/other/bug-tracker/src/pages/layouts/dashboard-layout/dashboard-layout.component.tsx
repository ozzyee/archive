import { TDashboardLayoutProps } from "./dashboard-layout.definition";
import * as S from "./dashboard-layout.style";

// Components
import { ScheduleLayout } from "../../../components/layouts/schedule-modal/schedule-layout.component";
import { UserModalLayout } from "../../../components/layouts/user-modal/user-modal-layout.component";
import { ProjectGraphModal } from "../../../components/layouts/project-graph-modal/project-graph-modal.component";
import { InboxLayout } from "../../../components/layouts/inbox-layout/inbox-layout.component";
import { PriorityJobsLayout } from "../../../components/layouts/priority-jobs-layout/priority-jobs-layout.component";

export function DashboardLayout({ className, user }: TDashboardLayoutProps) {
  return (
    <S.PageWrapper className={className}>
      {/* Top Of Page */}
      <S.HalfOfPage>
        <S.SchedularHolder>
          <ScheduleLayout />
        </S.SchedularHolder>

        <S.UserModelHolder>
          <UserModalLayout />
        </S.UserModelHolder>
      </S.HalfOfPage>

      {/* Bottom Of Page */}
      <S.HalfOfPage>
        <S.SmallBottomComponent>
          <ProjectGraphModal />
        </S.SmallBottomComponent>

        <S.SmallBottomComponent>
          <S.CenterContentBottom>
            <InboxLayout />
          </S.CenterContentBottom>
        </S.SmallBottomComponent>

        <S.PriorityJobsHolder>
          <S.CenterContentBottom>
            <PriorityJobsLayout />
          </S.CenterContentBottom>
        </S.PriorityJobsHolder>
      </S.HalfOfPage>
    </S.PageWrapper>
  );
}
